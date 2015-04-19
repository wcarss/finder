#!env/bin/python
import sys
import yaml
from app import app

if __name__ == '__main__':
  if len(sys.argv) != 2:
    print "Usage: ./run.py config.yaml"
    print "    where config.yaml contains values for your database connection:"
    print "    user"
    print "    password"
    print "    host"
    print "    database"
    sys.exit(1)

  with open(sys.argv[1]) as f:
    config = yaml.load(f)

  for k, v in config.iteritems():
    app.config[k] = v
  app.run(debug=True, port=8000)
