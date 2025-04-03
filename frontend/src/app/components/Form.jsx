'use client'
import { useState } from 'react';

const Form = () => {
  const [task, setTask] = useState({
    title: '',
    description: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask({
      ...task,
      [name]: value
    });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Se ejecuto el submit-task: ', task);
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/tasks/`, {
      method: 'POST',
      body: JSON.stringify(task),
      headers: {
        'Content-Type': 'application/json',
      }
    })
    const data = await res.json();
    console.log('data: ', data);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2 className="text-base/7 font-semibold text-gray-900">Add Task</h2>
        <p className="mt-1 text-sm/6 text-gray-600">
          Write down the task you want to add.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div className="sm:col-span-4">
            <label htmlFor="username" className="block text-sm/6 font-medium text-gray-900">
              Title
            </label>
            <div className="mt-2">
              <div className="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-neutral-800">
                <div className="shrink-0 text-base text-gray-500 select-none sm:text-sm/6"></div>
                <input
                  id="title"
                  name="title"
                  type="text"
                  className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>

          <div className="col-span-full">
            <label htmlFor="about" className="block text-sm/6 font-medium text-gray-900">
              Description
            </label>
            <p className="mt-3 text-sm/6 text-gray-600">Write a few sentences.</p>
            <div className="mt-2">
              <textarea
                id="description"
                name="description"
                rows={4}
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-neutral-800 sm:text-sm/6"
                defaultValue={''}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
        <button
          className="rounded-md bg-white mt-6 px-2.5 py-1.5 text-sm font-semibold text-gray-900 ring-1 shadow-xs ring-gray-300 ring-inset hover:bg-gray-50 cursor-pointer"
        >
          Save
        </button>
      </form>
    </div>
  )
}

export default Form;