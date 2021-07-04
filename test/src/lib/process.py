import subprocess

class Rmc(object):
    @classmethod
    def run(cls, *opts):
        default_cmd = ["node", "dist/rmc.js"]
        cmd = default_cmd + list(opts)
        return subprocess.run(cmd, cwd="../rmc", stdout=subprocess.PIPE, stderr = subprocess.PIPE)