import React, {useState} from 'react'

export default function Categories({items, onClick}) {
  const [activeItem, setActiveItem] = useState(null)

  return (
    <div className='categories'>
      <ul>
        <li
          className={activeItem === null ? 'active' : ''}
          onClick={() => setActiveItem(null)}
        >
          Все
        </li>
        {items &&
          items.map((item, index) => (
            <li
              key={`${item}_${index}`}
              onClick={() => setActiveItem(index)}
              className={activeItem === index ? 'active' : ''}
            >
              {item}
            </li>
          ))}
      </ul>
    </div>
  )
}
