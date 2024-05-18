import { Chart } from "react-google-charts";


import './Nopage.css'
import './Dashboard.css'


function Dashboard() {

    //Gráfico 1
    const columns = [
        { type: "string", label: "Task ID" },
        { type: "string", label: "Task Name" },
        { type: "string", label: "Resource" },
        { type: "date", label: "Start Date" },
        { type: "date", label: "End Date" },
        { type: "number", label: "Duration" },
        { type: "number", label: "Percent Complete" },
        { type: "string", label: "Dependencies" },
    ];

    const rows = [
        [
            "toTrain",
            "Walk to train stop",
            "walk",
            null,
            null,
            5 * 60 * 1000,
            100,
            null,
        ],
        ["music", "Listen to music", "music", null, null, 70 * 60 * 1000, 100, null],
        [
            "wait",
            "Wait for train",
            "wait",
            null,
            null,
            10 * 60 * 1000,
            100,
            "toTrain",
        ],
        ["train", "Train ride", "train", null, null, 45 * 60 * 1000, 75, "wait"],
        ["toWork", "Walk to work", "walk", null, null, 10 * 60 * 1000, 0, "train"],
        ["work", "Sit down at desk", null, null, null, 2 * 60 * 1000, 0, "toWork"],
    ];

    const data = [columns, ...rows];

    const options = {
        height: 275,
        gantt: {
            defaultStartDateMillis: new Date(2015, 3, 28),
        },
    };


    //Gráfico 2

    const data2 = [
        [
            "Month",
            "Bolivia",
            "Ecuador",
            "Madagascar",
            "Papua New Guinea",
            "Rwanda",
            "Average",
        ],
        ["2004/05", 165, 938, 522, 998, 450, 614.6],
        ["2005/06", 135, 1120, 599, 1268, 288, 682],
        ["2006/07", 157, 1167, 587, 807, 397, 623],
        ["2007/08", 139, 1110, 615, 968, 215, 609.4],
        ["2008/09", 136, 691, 629, 1026, 366, 569.6],
    ];

    const options2 = {
        title: "Monthly Coffee Production by Country",
        vAxis: { title: "Cups" },
        hAxis: { title: "Month" },
        seriesType: "bars",
        series: { 5: { type: "line" } },
    };


    //Gráfico 3
    const data3 = [
        ["Task", "Hours per Day"],
        ["Work", 11],
        ["Eat", 2],
        ["Commute", 2],
        ["Watch TV", 2],
        ["Sleep", 7],
    ];

    const options3 = {
        title: "My Daily Activities",
    };


    //Gráfico 4

    const data4 = [
        ["Generation", "Descendants"],
        [0, 1],
        [1, 33],
        [2, 269],
        [3, 2013],
        [4, 1000],
    ];

    const options4 = {
        title: "Descendants by Generation",
        hAxis: { title: "Generation", minValue: 0, maxValue: 3 },
        vAxis: { title: "Descendants", minValue: 0, maxValue: 2100 },
        trendlines: {
            0: {
                type: "exponential",
                visibleInLegend: true,
            },
        },
    };

    //Gráfico5
    const data5 = [
        [
            { type: "string", id: "Position" },
            { type: "string", id: "Name" },
            { type: "date", id: "Start" },
            { type: "date", id: "End" },
        ],
        [
            "President",
            "George Washington",
            new Date(1789, 3, 30),
            new Date(1797, 2, 4),
        ],
        ["President", "John Adams", new Date(1797, 2, 4), new Date(1801, 2, 4)],
        ["President", "Thomas Jefferson", new Date(1801, 2, 4), new Date(1809, 2, 4)],
        ["Vice President", "John Adams", new Date(1789, 3, 21), new Date(1797, 2, 4)],
        [
            "Vice President",
            "Thomas Jefferson",
            new Date(1797, 2, 4),
            new Date(1801, 2, 4),
        ],
        ["Vice President", "Aaron Burr", new Date(1801, 2, 4), new Date(1805, 2, 4)],
        [
            "Vice President",
            "George Clinton",
            new Date(1805, 2, 4),
            new Date(1812, 3, 20),
        ],
        [
            "Secretary of State",
            "John Jay",
            new Date(1789, 8, 25),
            new Date(1790, 2, 22),
        ],
        [
            "Secretary of State",
            "Thomas Jefferson",
            new Date(1790, 2, 22),
            new Date(1793, 11, 31),
        ],
        [
            "Secretary of State",
            "Edmund Randolph",
            new Date(1794, 0, 2),
            new Date(1795, 7, 20),
        ],
        [
            "Secretary of State",
            "Timothy Pickering",
            new Date(1795, 7, 20),
            new Date(1800, 4, 12),
        ],
        [
            "Secretary of State",
            "Charles Lee",
            new Date(1800, 4, 13),
            new Date(1800, 5, 5),
        ],
        [
            "Secretary of State",
            "John Marshall",
            new Date(1800, 5, 13),
            new Date(1801, 2, 4),
        ],
        [
            "Secretary of State",
            "Levi Lincoln",
            new Date(1801, 2, 5),
            new Date(1801, 4, 1),
        ],
        [
            "Secretary of State",
            "James Madison",
            new Date(1801, 4, 2),
            new Date(1809, 2, 3),
        ],
    ];

    //Gráfico6
    const data6 = [
        ["id", "childLabel", "parent", "size", { role: "style" }],
        [0, "Life", -1, 1, "black"],
        [1, "Archaea", 0, 1, "black"],
        [2, "Eukarya", 0, 5, "black"],
        [3, "Bacteria", 0, 1, "black"],
        [4, "Crenarchaeota", 1, 1, "black"],
        [5, "Euryarchaeota", 1, 1, "black"],
        [6, "Korarchaeota", 1, 1, "black"],
        [7, "Nanoarchaeota", 1, 1, "black"],
        [8, "Thaumarchaeota", 1, 1, "black"],
        [9, "Amoebae", 2, 1, "black"],
        [10, "Plants", 2, 1, "black"],
        [11, "Chromalveolata", 2, 1, "black"],
        [12, "Opisthokonta", 2, 5, "black"],
        [13, "Rhizaria", 2, 1, "black"],
        [14, "Excavata", 2, 1, "black"],
        [15, "Animalia", 12, 5, "black"],
        [16, "Fungi", 12, 2, "black"],
        [17, "Parazoa", 15, 2, "black"],
        [18, "Eumetazoa", 15, 5, "black"],
        [19, "Radiata", 18, 2, "black"],
        [20, "Bilateria", 18, 5, "black"],
        [21, "Orthonectida", 20, 2, "black"],
        [22, "Rhombozoa", 20, 2, "black"],
        [23, "Acoelomorpha", 20, 1, "black"],
        [24, "Deuterostomia", 20, 5, "black"],
        [25, "Chaetognatha", 20, 2, "black"],
        [26, "Protostomia", 20, 2, "black"],
        [27, "Chordata", 24, 5, "black"],
        [28, "Hemichordata", 24, 1, "black"],
        [29, "Echinodermata", 24, 1, "black"],
        [30, "Xenoturbellida", 24, 1, "black"],
        [31, "Vetulicolia", 24, 1, "black"],
    ];

    const options6 = {
        colors: ["black", "black", "black"],
        wordtree: {
            format: "explicit",
            type: "suffix",
        },
    };

    return (
        <>
            <div className="no-page">
                <Chart
                    chartType="Gantt"
                    width="100%"
                    height="300px"
                    data={data}
                    options={options}
                />
                <Chart
                    chartType="ComboChart"
                    width="100%"
                    height="400px"
                    data={data2}
                    options={options2}
                />

                <Chart
                    chartType="PieChart"
                    data={data3}
                    options={options3}
                    width={"100%"}
                    height={"400px"}
                />

                <Chart
                    chartType="ScatterChart"
                    width="80%"
                    height="400px"
                    data={data4}
                    options={options4}
                />

                <Chart
                    chartType="Timeline"
                    data={data5}
                    width="100%"
                    height="400px"
                />

                <Chart
                    chartType="WordTree"
                    width="100%"
                    height="400px"
                    data={data6}
                    options={options6}
                />
            </div>
        </>
    )
}

export default Dashboard
