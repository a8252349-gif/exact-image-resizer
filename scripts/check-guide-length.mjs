import fs from 'node:fs';
const stats=JSON.parse(fs.readFileSync('src/content/guide-stats.json','utf8'));
const expected={en:{field:'wordCount',min:1200},es:{field:'wordCount',min:1200},ko:{field:'characterCountNoSpaces',min:3500},ja:{field:'characterCountNoSpaces',min:3000}};
const failures=[];for(const row of stats){const rule=expected[row.locale];if(row[rule.field]<rule.min)failures.push(`${row.locale}/${row.slug}: ${row[rule.field]} < ${rule.min}`)}
if(stats.length!==60)failures.push(`Expected 60 guides, found ${stats.length}`);
for(const locale of Object.keys(expected)){const count=stats.filter(x=>x.locale===locale).length;if(count!==15)failures.push(`${locale}: expected 15, found ${count}`)}
if(failures.length){console.error(failures.join('\n'));process.exit(1)}
const summary=Object.fromEntries(Object.keys(expected).map(locale=>{const rows=stats.filter(x=>x.locale===locale),rule=expected[locale];return[locale,Math.min(...rows.map(x=>x[rule.field]))]}));
console.log('Guide length check passed:',summary);
