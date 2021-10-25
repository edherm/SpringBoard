import React from 'react';

export default function ({ checked }) {
  return checked ? (
    <i className="fas fa-check-square"></i>
  ) : (
    <i className="far fa-square"></i>
  );
}
