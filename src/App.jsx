import 'bulma/css/bulma.css';
import './App.scss';
import { useState } from 'react';
import classNames from 'classnames';

export const goods = [
  'Dumplings',
  'Carrot',
  'Eggs',
  'Ice cream',
  'Apple',
  'Bread',
  'Fish',
  'Honey',
  'Jam',
  'Garlic',
];

export const App = () => {
  const [selectedGood, setSelectedGood] = useState('Jam');

  return (
    <main className="section container">
      <h1 className="title is-flex is-align-items-center">
        {selectedGood ? `${selectedGood} is selected` : 'No goods selected'}

        {selectedGood && (
          <button
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
            onClick={() => setSelectedGood('')}
          />
        )}
      </h1>

      <table className="table">
        <tbody>
          {goods.map((good) => {
            const isGoodSelected = selectedGood === good;

            return (
              <tr
                data-cy="Good"
                key={good}
                className={classNames({
                  'has-background-success-light': isGoodSelected,
                })}
              >

                <td>
                  {isGoodSelected ? (
                    <button
                      data-cy="RemoveButton"
                      type="button"
                      className="button is-info"
                      onClick={() => {
                        setSelectedGood(isGoodSelected ? '' : good);
                      }}
                    >
                      {isGoodSelected ? '-' : '+'}
                    </button>
                  ) : (
                    <button
                      data-cy="AddButton"
                      type="button"
                      className="button"
                      onClick={() => {
                        setSelectedGood(isGoodSelected ? '' : good);
                      }}
                    >
                      {isGoodSelected ? '-' : '+'}
                    </button>
                  )}
                </td>

                <td data-cy="GoodTitle" className="is-vcentered">
                  {good}
                </td>
              </tr>
            );
          })}

        </tbody>
      </table>
    </main>
  );
};