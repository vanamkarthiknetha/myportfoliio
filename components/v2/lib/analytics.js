export const GA_ID = process.env.NEXT_PUBLIC_GA_ID;
export const CLARITY_ID = process.env.NEXT_PUBLIC_CLARITY_ID;

const UTM_KEYS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_term",
  "utm_content",
  "ref",
];
const UTM_STORAGE_KEY = "kv_utm";
const NO_TRACK_KEY = "kv_no_track";

export const isTrackingDisabled = () => {
  if (typeof window === "undefined") return true;
  try {
    const params = new URLSearchParams(window.location.search);
    if (params.get("notrack") === "1") {
      localStorage.setItem(NO_TRACK_KEY, "1");
    }
    if (params.get("track") === "1") {
      localStorage.removeItem(NO_TRACK_KEY);
    }
    if (localStorage.getItem(NO_TRACK_KEY) === "1") return true;
  } catch {}
  const host = window.location.hostname;
  if (host === "localhost" || host === "127.0.0.1") return true;
  return false;
};

export const captureUtm = () => {
  if (typeof window === "undefined") return null;
  if (isTrackingDisabled()) return null;
  const params = new URLSearchParams(window.location.search);
  const found = {};
  UTM_KEYS.forEach((k) => {
    const v = params.get(k);
    if (v) found[k] = v;
  });
  if (Object.keys(found).length === 0) {
    try {
      const cached = sessionStorage.getItem(UTM_STORAGE_KEY);
      return cached ? JSON.parse(cached) : null;
    } catch {
      return null;
    }
  }
  try {
    sessionStorage.setItem(UTM_STORAGE_KEY, JSON.stringify(found));
  } catch {}
  trackEvent("recruiter_visit", found);
  return found;
};

export const trackEvent = (name, params = {}) => {
  if (typeof window === "undefined") return;
  if (isTrackingDisabled()) return;
  let utm = null;
  try {
    const cached = sessionStorage.getItem(UTM_STORAGE_KEY);
    if (cached) utm = JSON.parse(cached);
  } catch {}
  const payload = utm ? { ...utm, ...params } : params;
  if (window.gtag) window.gtag("event", name, payload);
  if (window.clarity) window.clarity("event", name);
};

export const pageview = (url) => {
  if (typeof window === "undefined" || !window.gtag || !GA_ID) return;
  window.gtag("config", GA_ID, { page_path: url });
};
