from app import app
from flask import render_template, request
from models.images import Images
import datetime


@app.route('/')
def index():
  current_time = datetime.datetime.now()
  # dates like "2014-06-21 20:38:15.191355"

  return render_template('index.html', current_time=current_time)


@app.route('/quiet')
def quiet():
  return render_template('quiet.html')

@app.route('/save_image', methods=['POST'])
def save_image():
  Images.add(request.form)
  return "", 200

@app.route('/best')
def best_images():
  images = Images.get_best()
  return render_template('best.html', images=images)

@app.route('/about')
def about():
  return render_template('about.html')
