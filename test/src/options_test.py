from .lib.process import Rmc

class TestOptions(object):
    def test_not_path_provided(self):
        result = Rmc.run("test.json")
        assert result.returncode == 1
