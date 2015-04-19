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

"""
@app.route('/

/			find random images
/users/username		get user data
/login			post here with username and password to initiate a session
/logout			post here while logged in to terminate a session
/best			get here to pull json list of best images
/mine			get here to pull json list of personal images
/save			post here to mark an image as good
/tag			post here to add a tag to an image


straight-up rest style

images
images/id
users
users/id

/best -> pulls /images with a sort-by
/mine -> pull


images
id	url	date	zoom	x	y	x

best
image_id	count

mine
image_id	user_id

images
users

"""
