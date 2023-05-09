import { useState } from 'react'
import './App.css'
import contactsData from './contacts.json'

const fiveContacts = contactsData.slice(0, 5)
const restContacts = contactsData.slice(5, contactsData.length)

function App() {
  const [contacts, setContacts] = useState(fiveContacts)

  const addContact = () => {
    let randomContact = restContacts[Math.floor(Math.random() * restContacts.length)]
    setContacts((prevContacts) => [...prevContacts, randomContact])
  }

  const sortByPop = () => {
    setContacts((prevContacts) => {
      prevContacts.sort((a, b) => {
        return a.popularity.toFixed(2) > b.popularity.toFixed(2) ? 1 : -1
      })
    })
  }

  const sortByName = () => {
    setContacts((prevContacts) => {
      prevContacts.sort((a, b) => {
        return a.name > b.name ? 1 : -1
      })
    })
  }

  const deleteContact = (contactClicked) => {
    const filterList = contacts.filter((contact) => {
      return contact !== contactClicked
    })
    setContacts(filterList)
  }

  return (
    <div className="App">
      <h1>IronContacts</h1>
      <button onClick={addContact}>Add radom contact</button>
      <button onClick={sortByPop}>Sort by popularity</button>
      <button onClick={sortByName}>Sort by name</button>
      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won Oscar</th>
            <th>Won Emmy</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => (
            <tr key={contact.id}>
              <td>
                <img className="contactPhoto" src={contact.pictureUrl} alt="Contact face" />
              </td>
              <td>{contact.name}</td>
              <td>{contact.popularity.toFixed(2)}</td>
              <td>{contact.wonOscar && 'trophy'}</td>
              <td>{contact.wonEmmy && 'trophy'}</td>
              <button onClick={deleteContact}>Delete</button>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default App
