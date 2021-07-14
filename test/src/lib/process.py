import subprocess
from subprocess import CompletedProcess
from ..conftest import APP_ROOT


class Rmc(object):
    @classmethod
    def run(cls, *opts):
        default_cmd = ["node", "dist/rmc.js"]
        cmd = default_cmd + list(opts)
        raw_result = subprocess.run(cmd, cwd="../rmc", stdout=subprocess.PIPE, stderr=subprocess.PIPE)
        result = ProcessResult(raw_result)
        print()
        print_stdout(result)
        print_stderr(result)
        return result


class ProcessResult(object):
    def __init__(self, result: CompletedProcess[bytes]) -> None:
        super().__init__()
        self._result = result
        self._out = result.stdout.decode("utf-8")
        self._err = result.stderr.decode("utf-8")

    @property
    def stdout(self) -> str:
        return self._out

    @property
    def stderr(self) -> str:
        return self._err

    @property
    def returncode(self) -> int:
        return self._result.returncode


def print_stdout(subprocess_result: ProcessResult):
    print(subprocess_result.stdout)


def print_stderr(subprocess_result: ProcessResult):
    print(subprocess_result.stderr)
