"""
scrape_external_osce.py: Scraper & Importer for Public Medical OSCE Guides & Clinical Checklists
(Geeky Medics, Oxford Medical Education, LITFL, SingHealth / MOH Clinical Approaches).
Run: python scripts/scrape_external_osce.py
"""
import re
import json
import urllib.request
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent

PUBLIC_OSCE_SOURCES = [
    ("Geeky Medics History Taking", "https://geekymedics.com/category/osce/history-taking/"),
    ("LITFL Clinical Cases", "https://litfl.com/category/clinical-cases/"),
    ("Oxford Medical Education OSCE", "https://oxfordmedicaleducation.com/osce/"),
]


def fetch_titles_from_url(name: str, url: str):
    req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0 (OSCEBlitz Clinical Scraper)"})
    try:
        with urllib.request.urlopen(req, timeout=8) as resp:
            html = resp.read().decode("utf-8", errors="ignore")
        headings = re.findall(r"<h[23][^>]*>(.*?)</h[23]>", html, flags=re.I | re.S)
        cleaned = []
        for h in headings:
            txt = re.sub(r"<[^>]+>", "", h).strip()
            if 10 <= len(txt) <= 120 and txt not in cleaned:
                cleaned.append(txt)
        return {"source": name, "url": url, "status": "ok", "extracted_topics": cleaned[:20]}
    except Exception as e:
        return {"source": name, "url": url, "status": f"offline_fallback ({e})", "extracted_topics": []}


def main():
    results = [fetch_titles_from_url(n, u) for n, u in PUBLIC_OSCE_SOURCES]
    out_path = ROOT / "cases" / "scraped_osce_sources.json"
    out_path.write_text(json.dumps(results, indent=2, ensure_ascii=False), encoding="utf-8")
    print(f"Saved scraped OSCE index to {out_path}")


if __name__ == "__main__":
    main()
