import {allData} from './components/data.js';
import {createPersons} from './components/Person.js';

function create(item) {
  item.forEach((item) => {
    createPersons(item.personList, item.list)
  });
}

create(allData);



