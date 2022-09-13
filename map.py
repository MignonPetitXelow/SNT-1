import folium
from folium import plugins

def mapFromCord(x, y):
    map_osm = folium.Map(location=[x, y])
    map_osm.save('osm.html')