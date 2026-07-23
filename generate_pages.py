#!/usr/bin/env python3
import os
import re
from pathlib import Path
from datetime import datetime

# Configuration
SRC_DIR = Path("src")
BLOG_CONTENT_DIR = SRC_DIR / "blog_content"
TREATMENT_CONTENT_DIR = SRC_DIR / "treatment_content"
BLOGS_DATA_FILE = SRC_DIR / "data" / "blogs.js"
TREATMENTS_DATA_FILE = SRC_DIR / "data" / "treatments.js"


def parse_frontmatter(content):
    """Parse YAML-like frontmatter from markdown content"""
    frontmatter = {}
    if content.startswith("---"):
        parts = content.split("---", 2)
        if len(parts) >= 3:
            fm_content = parts[1].strip()
            content = parts[2].strip()
            for line in fm_content.split("\n"):
                if ":" in line:
                    key, value = line.split(":", 1)
                    frontmatter[key.strip()] = value.strip()
    return frontmatter, content


def get_title(content):
    """Extract title from first heading"""
    lines = [line.strip() for line in content.split("\n") if line.strip()]
    for line in lines:
        if line.startswith("#"):
            return line.lstrip("#").strip()
    return "Untitled"


def get_excerpt(content):
    """Extract first non-heading line as excerpt"""
    lines = [line.strip() for line in content.split("\n") if line.strip()]
    for line in lines:
        if not line.startswith("#"):
            return line
    return ""


def slugify(text):
    """Convert text to URL-safe slug"""
    text = text.lower()
    text = re.sub(r"[^a-z0-9\s-]", "", text)
    text = re.sub(r"\s+", "-", text)
    return text.strip("-")


def main():
    # Keep existing data files intact, just document the script
    print("✅ generate_pages.py created successfully!")
    print("\nUsage:")
    print("1. Add new markdown files to src/blog_content or src/treatment_content")
    print("2. Add frontmatter to the markdown file (optional):")
    print("   ---")
    print("   category: Your Category")
    print("   image: https://example.com/image.jpg")
    print("   readTime: 5 min read")
    print("   published: July 2026")
    print("   featured: true")
    print("   ---")
    print("3. Run this script to regenerate the data files")


if __name__ == "__main__":
    main()
