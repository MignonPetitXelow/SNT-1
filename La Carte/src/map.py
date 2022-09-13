import folium
from folium import plugins #Optional

def mapFromCord(x, y): #Basic function to create a map from cordinates x, y.
    map_osm = folium.Map(location=[x, y])
    map_osm.save("folium.map.html")

def zoomMapFromCord(x, y, zoom):
    map_osm = folium.Map(location=[x, y], zoom_start=zoom)
    map_osm.save("folium.map.html")

def writedMapFromCord(x, y):
    map_osm = folium.Map(location=[x, y], tiles="Stamen Toner")
    map_osm.add_child(folium.LatLngPopup())
    map_osm.save("folium.map.html")
  