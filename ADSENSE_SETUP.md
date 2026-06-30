# AdSense Setup

AdSense approval is not guaranteed. This project ships in a conservative approval-stage state: ownership metadata and `ads.txt` are present, while scripts, manual units, and automatic placeholders are disabled. The local privacy dialog is available, with advertising consent off by default.

## Approval-stage environment

```env
NEXT_PUBLIC_ADSENSE_CLIENT=ca-pub-9328837907414732
NEXT_PUBLIC_ADSENSE_SCRIPT_ENABLED=false
NEXT_PUBLIC_ADSENSE_MANUAL_ADS_ENABLED=false
NEXT_PUBLIC_SHOW_AD_PLACEHOLDERS=false
NEXT_PUBLIC_GOOGLE_CMP_ENABLED=false

NEXT_PUBLIC_ADSENSE_HOME_SLOT=
NEXT_PUBLIC_ADSENSE_CONTENT_SLOT=
NEXT_PUBLIC_ADSENSE_GUIDE_SLOT=
NEXT_PUBLIC_ADSENSE_TOOL_BOTTOM_SLOT=
```

Even with scripts disabled, the build includes:

```html
<meta name="google-adsense-account" content="ca-pub-9328837907414732">
```

and root-level `ads.txt`:

```text
google.com, pub-9328837907414732, DIRECT, f08c47fec0942fa0
```

## Activation sequence after approval

1. Confirm that the exact production domain is approved in AdSense.
2. Confirm `/ads.txt` returns the publisher line with a 200 response.
3. Configure consent first. Google Privacy & Messaging is the recommended route for EEA, United Kingdom, and Switzerland; set `NEXT_PUBLIC_GOOGLE_CMP_ENABLED=true` after publishing the message.
4. In Render, set `NEXT_PUBLIC_ADSENSE_SCRIPT_ENABLED=true` and redeploy.
5. Decide whether to use automatic ads, manual ads, or both.
6. If using automatic ads, exclude these editor routes in AdSense:

```text
/en/resizer/
/ko/resizer/
/ja/resizer/
/es/resizer/
```

7. Create manual display slots in AdSense and copy only numeric slot IDs into the matching variables.
8. Set `NEXT_PUBLIC_ADSENSE_MANUAL_ADS_ENABLED=true` only after at least one slot is configured.
9. Redeploy. A manual component returns `null` when its slot is empty, so no blank box should appear.
10. When Google CMP is enabled, Image Resizer suppresses its own privacy dialog to avoid duplicate prompts. Without Google CMP, the local dialog gates the AdSense script and manual slots until advertising consent is saved.
11. Test consent in a clean browser profile and, where possible, from an affected region.
12. Inspect mobile layouts. Ads must not sit beside upload, resize, cancel, retry, or download controls.
13. Test that no ad resembles a button and that a layout shift does not move a user’s click onto an ad.
14. Review the AdSense Policy Center after deployment and after major layout changes.

## Intended manual placements

- Home: between substantial content sections.
- Long guide: one mid-article unit and one near related reading.
- Tool route: only after all explanatory content, never inside the editor.

## Prohibited placements in this project

- Upload area.
- Immediately above or below the Resize button.
- Immediately above or below any download button.
- File list, settings fields, quality slider, modal, or processing status.
- Sticky overlay that covers editing.
- Cookie action area.

## Privacy policy update

Before enabling advertising, verify that the production privacy and cookie pages accurately describe Google and third-party cookies, web beacons, IP processing, consent, and user controls. Do not claim that the site is cookie-free once advertising or analytics is active.
