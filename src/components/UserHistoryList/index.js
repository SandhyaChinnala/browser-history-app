import './index.css'

const UserHistory = props => {
  const {historyListDetails, onDeleteHistoryItem} = props
  const {title, timeAccessed, logoUrl, domainUrl, id} = historyListDetails

  const onDelete = () => {
    onDeleteHistoryItem(id)
  }

  return (
    <li className="history-items-list">
      <p className="time-accessed">{timeAccessed}</p>
      <div className="history-container">
        <div className="domain-container">
          <img src={logoUrl} alt="domain logo" className="domain-logo" />
          <div className="domain-name-container">
            <p className="title">{title}</p>
            <p className="domain-url">{domainUrl}</p>
          </div>
        </div>
        <div className="delete-container">
          <button
            type="button"
            className="delete-button"
            onClick={onDelete}
            // eslint-disable-next-line react/no-unknown-property
            testid="delete"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
              alt="delete"
              className="delete-icon"
            />
          </button>
        </div>
      </div>
    </li>
  )
}

export default UserHistory
