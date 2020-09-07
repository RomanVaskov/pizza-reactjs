import React, {useState} from 'react'

const Categories = React.memo(function Categories({items, onClick}) {
  const [activeItem, setActiveItem] = useState(null)

  const onSelectItem = (index) => {
    setActiveItem(index)
    onClick(index)
  }
  return (
    <div className='categories'>
      <ul>
        <li
          className={activeItem === null ? 'active' : ''}
          onClick={() => onSelectItem(null)}
        >
          Все
        </li>
        {items &&
          items.map((item, index) => (
            <li
              key={`${item}_${index}`}
              onClick={() => onSelectItem(index)}
              className={activeItem === index ? 'active' : ''}
            >
              {item}
            </li>
          ))}
      </ul>
    </div>
  )
})

export default Categories
