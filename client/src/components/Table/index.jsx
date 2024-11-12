import Modal from '../Modal';
import { useState } from 'react';

import './table.css';

const Table = ({
  head = [],
  data = [],
  onDeleteDepartment = () => {},
  onEditDepartment = () => {},
  onDeleteHospital = () => {},
  onEditHospital = () => {},
  onDeleteLocation = () => {},
  onEditLocation = () => {},
}) => {
  const [showmodal, setShowModal] = useState(false);
  const [selected, setSelected] = useState('');

  return (
    <div className="table">
      <Modal
        text={'Are you sure you want to delete?'}
        showmodal={showmodal}
        setModal={setShowModal}
        onOk={() => {
          onDeleteDepartment(selected);
          onDeleteHospital(selected);
          onDeleteLocation(selected);
        }}
      />
      <table>
        <tr>
          {head.map(item => {
            if (item.key == '_id') return <th width={160}>{item.text}</th>;
            else if (item.key == 'name')
              return <th width={100}>{item.text}</th>;
            else if (item.key == 'firstname')
              return <th width={120}>{item.text}</th>;
            else if (item.key == 'lastname')
              return <th width={120}>{item.text}</th>;
            else if (item.key == 'about')
              return <th width={130}>{item.text}</th>;
            else if (item.key == 'image')
              return <th width={80}>{item.text}</th>;
            else if (item.key == 'location')
              return <th width={80}>{item.text}</th>;
            else if (item.key == 'contactnumber')
              return <th width={80}>{item.text}</th>;
            else if (item.key == 'specialization')
              return <th width={140}>{item.text}</th>;
            else if (item.key == 'department')
              return <th width={150}>{item.text}</th>;
            else if (item.key == 'delete')
              return <th width={50}>{item.text}</th>;
            else if (item.key == 'edit') return <th width={50}>{item.text}</th>;
            else return <th>{item.text}</th>;
          })}
        </tr>
        {data.map(item => {
          return (
            <tr>
              {head.map(h => {
                if (h.type == 'img') {
                  return (
                    <td>
                      <img src={item[h.key]} width={h.width} alt="Image" />
                    </td>
                  );
                } else if (h.type == 'delete') {
                  return (
                    <td className="delete-td">
                      <i
                        onClick={() => {
                          setSelected(item._id);
                          setShowModal(true);
                        }}
                        class="fa-regular fa-trash-can"
                      ></i>
                    </td>
                  );
                } else if (h.type == 'edit') {
                  return (
                    <td className="edit-td">
                      <i
                        onClick={() => {
                          onEditDepartment(item._id);
                          onEditLocation(item._id);
                          onEditHospital(item._id);
                        }}
                        class="fa-regular fa-pen-to-square"
                      ></i>
                    </td>
                  );
                } else return <td>{item[h.key]}</td>;
              })}
            </tr>
          );
        })}
      </table>
    </div>
  );
};

export default Table;
