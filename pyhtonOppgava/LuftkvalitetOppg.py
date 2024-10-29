import math
import matplotlib
import numpy as np
import matplotlib.pyplot as plt
import matplotlib
matplotlib.use('TkAgg')
from matplotlib.widgets import TextBox
import matplotlib.patches as mpatches
import random
from random import randint
import matplotlib.image as mpimg

def GenereateRandomYearDataList(intencity: float, seed: int = 0) -> list[int]:
    if seed != 0:
        random.seed(seed)
    centervals = [200, 150, 100, 75, 75, 75, 50, 75, 100, 150, 200, 250, 300]
    centervals = [x * intencity for x in centervals]
    nox = centervals[0]
    inc = True
    noxList = []
    for index in range(1, 365):
        if randint(1, 100) > 50:
            inc = not inc
        center = centervals[int(index / 30)]
        dx = min(2.0, max(0.5, nox / center))
        nox = nox + randint(1, 5) / dx if inc else nox - randint(1, 5) * dx
        nox = max(10, nox)
        noxList.append(nox)
    return noxList

kron_nox_year = GenereateRandomYearDataList(intencity=1.0, seed=2)
nord_nox_year = GenereateRandomYearDataList(intencity=0.3, seed=1)
bryg_nox_year = GenereateRandomYearDataList(intencity=0.7, seed=3)

coordinates_Nordnes = (125, 35)
coordinates_Kronstad = (305.7, 307.4)
coordinates_Bryggen = (140, 130)

days_interval = (1, 365)
marked_point = (0, 0)

fig = plt.figure(figsize=(15, 7))
axNok = fig.add_axes((0.05, 0.05, 0.45, 0.9))
axBergen = fig.add_axes((0.55, 0.05, 0.4, 0.9))
axBergen.axis('off')

# Styling
fig.patch.set_facecolor('#2c3e50')
axNok.set_facecolor('#34495e')
axNok.set_title("NOX Verdier", fontsize=22, fontweight='bold', color='white')

def update_ticks():
    start_day, end_day = days_interval
    xticks = np.linspace(start_day, end_day, 5)
    xlabels = [f'Dag {int(day)}' for day in xticks]
    axNok.set_xticks(xticks)
    axNok.set_xticklabels(xlabels, fontsize=12, color='white')

def CalcPointValue(valN, valK):
    distNordnes = math.dist(coordinates_Nordnes, marked_point)
    distKronstad = math.dist(coordinates_Kronstad, marked_point)

    val = (1 - distKronstad / (distKronstad + distNordnes)) * valK + \
          (1 - distNordnes / (distKronstad + distNordnes)) * valN

    return val

# lotte grafen
def plot_graph():
    axNok.cla()
    axBergen.cla()

    nord_nox = nord_nox_year[days_interval[0]-1:days_interval[1]]
    kron_nox = kron_nox_year[days_interval[0]-1:days_interval[1]]
    bryg_nox = bryg_nox_year[days_interval[0]-1:days_interval[1]]

    days = len(nord_nox)
    list_days = np.linspace(days_interval[0], days_interval[1], days)

    axNok.plot(list_days, nord_nox, color='#3498db', linewidth=2, linestyle='-', label='Nordnes')
    axNok.plot(list_days, kron_nox, color='#e74c3c', linewidth=2, linestyle='-', label='Kronstad')
    axNok.plot(list_days, bryg_nox, color='yellow', linewidth=2, linestyle='-', label='Bryggen')

    if marked_point != (0, 0):
        nox_point = [CalcPointValue(nord_nox[i], kron_nox[i]) for i in range(days)]
        axNok.plot(list_days, nox_point, 'orange', marker='o', markersize=4, linewidth=2, label='Markert plass')
        circle = mpatches.Circle((marked_point[0], marked_point[1]), 15, color='orange')
        axBergen.add_patch(circle)

    axNok.legend(loc='upper right', fontsize=10, frameon=True, shadow=True, facecolor='#2c3e50', edgecolor='white')
    axNok.grid(linestyle='-', alpha=0.6, color='gray')

    img = mpimg.imread('Skjermbilde.png')
    axBergen.imshow(img)
    axBergen.set_title("Luftkvalitet i Bergen kommune", fontsize=15, fontweight='bold', color='green')

    draw_circles_stations()
    plt.draw()

def draw_circles_stations():
    circle_nordnes = mpatches.Circle(coordinates_Nordnes, radius=15, color='#007acc')
    axBergen.add_patch(circle_nordnes)
    circle_kronstad = mpatches.Circle(coordinates_Kronstad, radius=15, color='#e74c3c')
    axBergen.add_patch(circle_kronstad)
    circle_bryggen = mpatches.Circle(coordinates_Bryggen, radius=15, color='yellow')
    axBergen.add_patch(circle_bryggen)

# Funksjon for å oppdatere grafen basert på brukerens inndata
def update_interval(val):
    try:
        start_day = int(start_text_box.text)
        end_day = int(end_text_box.text)
        if 1 <= start_day < end_day <= 365:
            global days_interval
            days_interval = (start_day, end_day)
            plot_graph()
        else:
            print("Dagene må være innenfor 1 til 365, og startdagen må være mindre enn sluttdagen.")
    except ValueError:
        print("Vennligst skriv inn gyldige heltall for dagene.")

ax_start_box = fig.add_axes((0.05, 0.95, 0.1, 0.05))
ax_end_box = fig.add_axes((0.2, 0.95, 0.1, 0.05))
start_text_box = TextBox(ax_start_box, 'Start:', initial="1")
end_text_box = TextBox(ax_end_box, 'Slutt:', initial="30")

start_text_box.on_submit(update_interval)
end_text_box.on_submit(update_interval)

plot_graph()

def on_click(event):
    global marked_point
    if ax := event.inaxes:
        if ax == axBergen:
            marked_point = (event.xdata, event.ydata)
            plot_graph()

fig.canvas.mpl_connect('button_press_event', on_click)

plt.show()
