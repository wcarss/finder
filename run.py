#!env/bin/python
from app import app

if __name__ == '__main__':
    app.run(debug=True, port=8000)