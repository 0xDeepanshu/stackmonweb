import sys, json
from graphify.extract import collect_files, extract
from pathlib import Path

detect = json.loads(open('graphify-out/.graphify_detect.json', encoding='utf-8').read())
code_files = [Path(f) for f in detect.get('files', {}).get('code', [])]
result = extract(code_files, cache_root=Path('.'))
open('graphify-out/.graphify_ast.json', 'w', encoding='utf-8').write(json.dumps(result, indent=2))
print(f"AST: {len(result['nodes'])} nodes, {len(result['edges'])} edges")
