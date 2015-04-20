import mysql.connector
from datetime import datetime, date
from .. import app

class Images(object):
  config = {
    'user': 'finder',
    'password': 'finder',
    'database': 'finder',
    'raise_on_warnings': True,
  }

  @classmethod
  def add(cls, data):
    cnx = mysql.connector.connect(**app.config['database'])
    cursor = cnx.cursor()

    add_image = (
      "INSERT INTO images (created_at, date, zoom, x, y, url) "
      "VALUES (%s, %s, %s, %s, %s, %s)"
    )

    data_image = (
      data['created_at'],
      data['date'],
      data['zoom'],
      data['x'],
      data['y'],
      data['url']
    )

    # Insert new employee
    cursor.execute(add_image, data_image)
    # Make sure data is committed to the database
    cnx.commit()
    cnx.close()

  @classmethod
  def get_best(cls):
    cnx = mysql.connector.connect(**app.config['database'])
    cursor = cnx.cursor()

    query = (
      "SELECT url, count(*) FROM images group by url order by 2 desc limit 20"
    )

    cursor.execute(query)

    images = []
    for (url, count) in cursor:
        images.append(url)

    cnx.close()

    return images
