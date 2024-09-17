import React, { useState } from "react";

const Agenda = () => {
  // default agenda data
  const defaultAgenda = [
    {
      title: "Angular",
      description: "Some description about the angular",
      topics: [
        "Introduction",
        "Typescript",
        "Why Angular?",
        "Understanding Versions",
        "Fundamentals",
      ],
    },
    {
      title: "Angular",
      description: "Some description about the angular",
      topics: [
        "Introduction",
        "Typescript",
        "Why Angular?",
        "Understanding Versions",
        "Fundamentals",
      ],
    },
  ];

  // agenda and view
  const [agendas, setAgendas] = useState(defaultAgenda);
  const [view, setView] = useState("view");
  const [newTitle, setNewTitle] = useState("");
  const [newDescription, setNewDescription] = useState("");
  const [newTopic, setNewTopic] = useState("");
  const [topics, setTopics] = useState([]);
  const [titleError, setTitleError] = useState("");
  const [descriptionError, setDescriptionError] = useState("");
  const [topicError, setTopicError] = useState("");

  // function to handle adding new topics
  const addTopic = () => {
    if (newTitle.trim() === "") {
      setTopicError("Topic is required");
      return;
    }
    setTopics([...topics, newTopic]);
    setNewTopic("");
    setTopicError("");
  };

  // function to handle submitting a new agenda
  const submitAgenda = (e) => {
    e.preventDefault();
    if (newTitle.trim() === "") {
      setTitleError("Title is required");
    } else {
      setTitleError("");
    }
    if (newDescription.trim() === "") {
      setDescriptionError("Description is required");
    } else {
      setDescriptionError("");
    }
    if (topics.length === 0) {
      setTopicError("No Topics Added");
    } else {
      setTopicError("");
    }

    if (newTitle && newDescription && topics.length > 0) {
      const newAgenda = {
        title: newTitle,
        description: newDescription,
        topics: topics,
      };
      setAgendas([...agendas, newAgenda]);
      setNewTitle("");
      setNewDescription("");
      setTopics([]);
      setView("view");
    }
  };

  return (
    <div className="container m-auto mx-auto">
      {view === "add" ? (
        <div role="addAgenda" className="mx-auto w-50">
          <button
            className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            onClick={() => setView("view")}
          >
            Click To View Agenda
          </button>
          <form onSubmit={submitAgenda}>
            <div className="sm:col-span-3">
              <label
                htmlFor="title"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Title
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="newTitle"
                  id="title"
                  placeholder="Enter the title"
                  className="block w-80 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  role="inputTitle"
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                />
                <small className="text-red-600" data-testid="invalidTitle">
                  {titleError}
                </small>
              </div>
            </div>
            <div className="sm:col-span-3">
              <label
                htmlFor="description"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Description
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="newdescription"
                  id="description"
                  className="block w-80 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="Enter the description"
                  role="inputDescription"
                  value={newDescription}
                  onChange={(e) => setNewDescription(e.target.value)}
                />
                <small
                  className="text-red-600"
                  data-testid="invalidDescription"
                >
                  {descriptionError}
                </small>
              </div>
            </div>
            <div className="sm:col-span-3 flex items-end justify-left gap-x-6">
              <div className="mt-2">
                <label
                  htmlFor="topic"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Enter topic
                </label>
                <input
                  type="text"
                  name="newTopic"
                  id="topic"
                  className="block w-80 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="Enter the topic"
                  role="inputTopic"
                  value={newTopic}
                  onChange={(e) => setNewTopic(e.target.value)}
                />
                <small className="text-red-600" data-testid="invalidTopic">
                  {topicError}
                </small>
              </div>
              <button
                type="button"
                className=""
                role="addTopicBtn"
                onClick={addTopic}
                disabled={!newTopic}
              >
                + Add Topic
              </button>
              <button
                type="submit"
                className=""
                role="submitAgendaBtn"
                disabled={!newTitle}
              >
                Submit Agenda
              </button>
            </div>
          </form>
          {topics.length === 0 && (
            <div className="text-red-600">No Topics Added</div>
          )}
          <div className="card my-3">
            <div className="card-header">Added Topics</div>
            <div className="card-body">
              <ul className="list-group">
                {topics.map((topic, index) => (
                  <li key={index} className="last-group-item" role="topicList">
                    {topic}
                  </li>
                ))}
              </ul>
            </div>
            <div className="card-footer">Refer the topics you added</div>
          </div>
        </div>
      ) : (
        <div role="viewAgenda">
          <button
            className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            role="goToAdd"
            onClick={() => setView("add")}
          >
            Click To Add Agenda
          </button>
          {agendas.map((agenda, index) => (
            <div key={index} className="card my-3">
              <div className="card-reader">{agenda.title}</div>
              <div className="card-body">
                <ul className="list-group">
                  {agenda.topics.map((topic, i) => (
                    <li key={i} className="list-group-item">
                      {topic}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="card-footer">{agenda.description}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Agenda;
