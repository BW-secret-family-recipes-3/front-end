import React from 'react';
// import PropTypes from 'prop-types';

export const DynamicInputs = ({ idx, dynamicState, handleDynamicChange, field1, field2 }) => {
  const field1Id = `${field1}-${idx}`;
  const field2Id = `${field2}-${idx}`;
  return (
      <div key={`Dynamic-${idx}`}>
        <label htmlFor={field1Id}>{`${field1} #${idx + 1}`}</label>
        <input
          type="text"
          name={field1Id}
          data-idx={idx}
          id={field1Id}
          className= {`${field1}`}
          value={dynamicState[idx].field1}
          onChange={handleDynamicChange}
        />
        <label htmlFor={field2}>{`${field2}`}</label>
        <input
          type="text"
          name={field2Id}
          data-idx={idx}
          id={field2Id}
          className={`${field2}`}
          value={dynamicState[idx].field2}
          onChange={handleDynamicChange}
        />
      </div>
    );
};

export const DynamicInput = ({ idx, dynamicState, handleDynamicChange, field}) => {
    const fieldId = `${field}-${idx}`;
    return (
        <div key={`Dynamic-${idx}`}>
            <label htmlFor={fieldId}>{`${field} #${idx + 1}`}</label>
            <input
            type="text"
            name={fieldId}
            data-idx={idx}
            id={fieldId}
            className= {`${field}`}
            value={dynamicState[idx].field}
            onChange={handleDynamicChange}
            />
        </div>
    );
};
// DynamicInputs.propTypes = {
//   idx: PropTypes.number,
//   DynamicState: PropTypes.array,
//   handleDynamicChange: PropTypes.func,
// };
