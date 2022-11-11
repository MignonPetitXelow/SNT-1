import folium
from folium import plugins # Optional

def mapFromCord(x, y): # Basic function to create a map from cordinates x, y.
    map_osm = folium.Map(location=[x, y])
    map_osm.save("out/folium.map.html")

def zoomMapFromCord(x, y, zoom):
    map_osm = folium.Map(location=[x, y], zoom_start=zoom)
    map_osm.save("out/folium.map.html")

def writedMapFromCord(x, y):
    map_osm = folium.Map(location=[x, y], tiles="Stamen Toner")
    map_osm.add_child(folium.LatLngPopup())
    map_osm.save("out/folium.map.html")
  
def customMap(x, y):
    map_osm = folium.Map(location=[x, y], tiles="Stamen Toner")
    map_osm.add_child(folium.LatLngPopup())

    folium.Marker([48.5136, -2.7759], popup='<i>Jean-charles</i>', icon=folium.features.CustomIcon('source/La Carte/ressources/jc.png', icon_size=(30,30))).add_to(map_osm)
    folium.Marker([47.6812, -2.8492], popup='<i>Mewen</i>', icon=folium.features.CustomIcon('source/La Carte/ressources/mw.png', icon_size=(40,30))).add_to(map_osm)
    folium.Marker([-40.3189, -9.9426], popup='<i>Ulysse</i>', icon=folium.features.CustomIcon('source/La Carte/ressources/uy.png', icon_size=(30,30))).add_to(map_osm)
    
    map_osm.save("out/folium.map.html")