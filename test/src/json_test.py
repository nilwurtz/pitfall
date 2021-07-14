from .lib.process import Rmc
from assertpy import assert_that
from .lib.json import read_expected, assert_json


class TestDryRun(object):
    def test_dryrun(self, create_json_with_comment):
        result = Rmc.run("test.json")
        assert_that(result.returncode).is_equal_to(0)
        expected = read_expected("c2.json")
        assert_json("test.json", expected)


class TestWrite(object):
    def test_with_indent_2(self, create_json_with_comment):
        result = Rmc.run("test.json", "-w")
        assert_that(result.returncode).is_equal_to(0)
        expected = read_expected("i2.json")
        assert_json("test.json", expected)

    def test_with_indent_4(self, create_json_with_comment):
        result = Rmc.run("test.json", "-w", "-i", "4")
        assert_that(result.returncode).is_equal_to(0)
        expected = read_expected("i4.json")
        assert_json("test.json", expected)
