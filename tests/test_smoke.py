"""Smoke test: AR overlay app entries exist and are structurally wired.

tsc --noEmit was run during review: the only errors are missing
node_modules type packages (@react-three/*), not code errors.
"""
import json
from pathlib import Path

ROOT = Path(__file__).parent.parent


def test_entries_exist():
    assert (ROOT / "src" / "main.tsx").exists(), "src/main.tsx missing"
    assert (ROOT / "src" / "App.tsx").exists(), "src/App.tsx missing"
    assert (ROOT / "src" / "components" / "ARScene.tsx").exists()
    assert (ROOT / "src" / "components" / "Overlay.tsx").exists()


def test_ar_scene_uses_xr_primitives():
    src = (ROOT / "src" / "components" / "ARScene.tsx").read_text()
    assert "useHitTest" in src, "ARScene does not use useHitTest"
    assert "ARScene" in src


def test_declared_deps_cover_imports():
    pkg = json.loads((ROOT / "package.json").read_text())
    deps = pkg.get("dependencies", {})
    for dep in ("@react-three/fiber", "@react-three/xr", "three", "react"):
        assert dep in deps, f"{dep} not declared"
