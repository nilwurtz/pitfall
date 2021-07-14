from .lib.process import Rmc
from assertpy import assert_that


class TestHelp(object):
    def test_h(self):
        result = Rmc.run("-h")
        assert_that(result.returncode).is_equal_to(0)
        assert_that(result.stdout).contains("Usage: rmc [options] <path>")

    def test_help(self):
        result = Rmc.run("--help")
        assert_that(result.returncode).is_equal_to(0)
        assert_that(result.stdout).contains("Usage: rmc [options] <path>")

    def test_help_even_if_path_provided(self, create_json_with_comment):
        result = Rmc.run("test.json", "--help")
        assert_that(result.returncode).is_equal_to(0)
        assert_that(result.stdout).contains("Usage: rmc [options] <path>")


class TestOptionsSuccess(object):
    def test_with_dryrun(self, create_json_with_comment):
        result = Rmc.run("test.json")
        assert_that(result.returncode).is_equal_to(0)
        assert_that(result.stdout).contains("Dry running...")
        assert_that(result.stdout).contains("Target file: test.json")
        assert_that(result.stdout).contains("Indent size: 2")

    def test_with_dryrun_indent_4(self, create_json_with_comment):
        result = Rmc.run("test.json", "-i", "4")
        assert_that(result.returncode).is_equal_to(0)
        assert_that(result.stdout).contains("Dry running...")
        assert_that(result.stdout).contains("Target file: test.json")
        assert_that(result.stdout).contains("Indent size: 4")

    def test_with_write(self, create_json_with_comment):
        result = Rmc.run("test.json", "-w")
        assert_that(result.returncode).is_equal_to(0)
        assert_that(result.stdout).does_not_contain("Dry running...")
        assert_that(result.stdout).contains("Overwrite file: test.json")
        assert_that(result.stdout).contains("Indent size: 2")

    def test_with_write_indent_4(self, create_json_with_comment):
        result = Rmc.run("test.json", "-w", "-i", "4")
        assert_that(result.returncode).is_equal_to(0)
        assert_that(result.stdout).does_not_contain("Dry running...")
        assert_that(result.stdout).contains("Overwrite file: test.json")
        assert_that(result.stdout).contains("Indent size: 4")


class TestOptionsFailed(object):
    def test_file_not_found(self):
        result = Rmc.run()
        assert_that(result.returncode).is_equal_to(1)
        assert_that(result.stderr).contains("error: missing required argument 'path'")

    def test_not_path_provided(self):
        result = Rmc.run("test.json")
        assert_that(result.returncode).is_equal_to(1)
        assert_that(result.stderr).contains("file: 'test.json' does not exists.")

    def test_with_invalid_file(self, create_invalid_json):
        result = Rmc.run("test.json")
        assert_that(result.returncode).is_equal_to(1)
        assert_that(result.stderr).contains("file: 'test.json' parse failed. Is json file?")

    def test_with_no_indent_value(self, create_json_with_comment):
        result = Rmc.run("test.json", "-i")
        assert_that(result.returncode).is_equal_to(1)
        assert_that(result.stderr).contains("error: option '-i <number>' argument missing")

    def test_with_no_indent_value_write(self, create_json_with_comment):
        result = Rmc.run("test.json", "-w", "-i")
        assert_that(result.returncode).is_equal_to(1)
        assert_that(result.stderr).contains("error: option '-i <number>' argument missing")
