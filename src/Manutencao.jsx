import { Chart } from "react-google-charts";
import { useState } from "react";
import './Manutencao.css'

function Manutencao() {
    const data = [
        [
            {
                type: "date",
                id: "Date",
            },
            {
                type: "number",
                id: "Won/Loss",
            },
        ],
        [new Date(2024, 3, 13), 400],
        [new Date(2024, 3, 20), 700],
        [new Date(2024, 3, 15), 500],
        [new Date(2024, 3, 16), 600],
        [new Date(2024, 3, 30), 400],

    ];

    const options = {
        title: "Calendário de manutenção",
    };

    const [tasks, setTask] = useState([]);
    const [newTask, setNewTask] = useState("");

    function handleInputChange(event) {
        setNewTask(event.target.value);
    }

    function addTask() {
        if (newTask.trim() !== "") {
            setTask(t => [...t, newTask]);
            setNewTask("");
        }
    }

    function deleteTask(index) {
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTask(updatedTasks);
    }


    return (
        <>
            <div className="no-page">
                <Chart
                    chartType="Calendar"
                    width="100%"
                    height="200px"
                    data={data}
                    options={options}
                />
                <div className="os-list">
                    <center><h1>Ordem de Serviço</h1>
                    <div>
                        <input type="text"
                            className="text-input"
                            placeholder="Digite uma nova OS"
                            value={newTask}
                            onChange={handleInputChange}
                        />
                        <button
                            className="add-button"
                            onClick={addTask}>
                            Criar OS
                        </button>
                    </div>

                    <ol>
                       {tasks.map((task, index)=>
                       <li key={index} className="OS">
                            <span className="text">{task}</span>
                            <button className="delete-button"
                            onClick={()=> deleteTask(index)}>
                                Finalizar OS
                            </button>
                       </li>
                    )}
                    </ol>
                    </center>
                </div>
            </div>
        </>
    )
}

export default Manutencao