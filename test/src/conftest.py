import pytest
import os
import subprocess
import json

TEST_PROJECT_DIR = os.path.dirname(os.path.dirname(__file__))
PROJECT_ROOT = os.path.dirname(TEST_PROJECT_DIR)
RESOURCE_ROOT = os.path.join(TEST_PROJECT_DIR, "src", "resources")
APP_ROOT = os.path.join(PROJECT_ROOT, "rmc")


@pytest.fixture(scope="session", autouse=True)
def setup_test():
    subprocess.run(["npm", "run", "clean-build"], cwd=APP_ROOT)


@pytest.fixture
def create_json_with_comment():
    with open(os.path.join(RESOURCE_ROOT, "setup", "c2.json"), "r", encoding="utf-8") as f:
        json = f.read()
        create_file("test.json", json)
        yield
        delete_file("test.json")


@pytest.fixture
def create_invalid_json():
    json = """
    import hoge

    def hoge():
        print("hello")
    """
    create_file("test.json", json)
    yield
    delete_file("test.json")


def create_file(file_name: str, body: str):
    with open(os.path.join(APP_ROOT, file_name), "w", encoding="utf-8") as f:
        f.write(body)


def delete_file(file_name: str):
    os.remove(os.path.join(APP_ROOT, file_name))
