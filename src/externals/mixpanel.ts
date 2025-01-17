import mixpanel, { Dict, Query } from "mixpanel-browser";

let mixpanelInstance: MixPanel | null = null;

export const getMixPanelClient = () => {
  if (!mixpanelInstance) {
    mixpanelInstance = new MixPanel();
  }
  return mixpanelInstance;
};

class MixPanel {
  constructor(debug = false) {
    const isProd = process.env.NODE_ENV === "production";
    mixpanel.init(process.env.NEXT_PUBLIC_MIXPANEL_KEY!, {
      debug : debug,
      track_pageview: true,
      persistence: "localStorage",
    });
  }

  identify(id: string) {
    mixpanel.identify(id);
  }

  alias(id: string) {
    mixpanel.alias(id);
  }

  track(event: string, props?: Dict) {
    mixpanel.track(event, props);
  }

  track_links(query: Query, name: string) {
    mixpanel.track_links(query, name, {
      referrer: document.referrer,
    });
  }

  set(props: Dict) {
    mixpanel.people.set(props);
  }
}

export default MixPanel;
