import sys

path = "/home/dildildil/final_project/spatial-processor-engine"
if path not in sys.path:
    sys.path.insert(0, path)

from wsgi import application