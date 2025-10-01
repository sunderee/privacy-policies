import json
import subprocess

with open("package.json", "r") as package_json_file:
    contents: str = package_json_file.read()
    package_json: dict[str, any] = json.loads(contents)

dependencies: dict[str, str] = package_json["dependencies"]
dev_dependencies: dict[str, str] = package_json["devDependencies"]

dependencies_list = [item for item in dependencies.keys()]
dev_dependencies_list = [item for item in dev_dependencies.keys()]

with open("package.json", "w") as writable_package_json_file:
    package_json["dependencies"] = {}
    package_json["devDependencies"] = {}
    json.dump(package_json, writable_package_json_file)

subprocess.run(["rm", "-rf", "node_modules", "package-lock.json", "bun.lock"])
subprocess.run(["bun", "add", *dependencies_list])
subprocess.run(["bun", "add", "--dev", *dev_dependencies_list])
