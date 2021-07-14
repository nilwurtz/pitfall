import os
from ..conftest import APP_ROOT, RESOURCE_ROOT
from assertpy import assert_that


def read_expected(file_name: str) -> str:
    with open(os.path.join(RESOURCE_ROOT, "expected", file_name)) as f:
        body = f.read()
    return body


def assert_json(file_name: str, body: str):
    with open(os.path.join(APP_ROOT, file_name), "r", encoding="utf-8") as f:
        assert_that(f.read()).is_equal_to(body)
