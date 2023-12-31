import Transactions from '../network/story';
import CheckUserAuth from './auth/check-user-auth';

const Dashboard = {
  async init () {
    CheckUserAuth.checkLoginState();
    await this._initialData();
  },

  async _initialData () {
    const cardLoading = document.getElementById('card-loading');
    cardLoading.classList.remove('d-none');
    cardLoading.classList.add('d-flex');
    const fetchRecords = (await Transactions.getAll()).data;
    cardLoading.classList.remove('d-flex');
    cardLoading.classList.add('d-none');
    this._userStory = fetchRecords.listStory;
    this._populateTransactionsRecordToTable(this._userStory);
    // this._populateTransactionsDataToCard(this._userTransactionsHistory);
  },

  _populateTransactionsRecordToTable (transactionsHistory = null) {
    if (!(typeof transactionsHistory === 'object')) {
      throw new Error(
        `Parameter transactionsHistory should be an object. The value is ${transactionsHistory}`
      );
    }

    if (!Array.isArray(transactionsHistory)) {
      throw new Error(
        `Parameter transactionsHistory should be an array. The value is ${transactionsHistory}`
      );
    }

    const recordBodyTable = document.querySelector('#list-story');
    recordBodyTable.className += 'row row-cols-1 row-cols-sm-2   g-3';
    recordBodyTable.innerHTML = '';
    if (transactionsHistory.length <= 0) {
      recordBodyTable.innerHTML = this._templateEmptyBodyTable();
      return;
    }

    transactionsHistory.forEach((item, idx) => {
      recordBodyTable.innerHTML += this._templateBodyTable(
        idx,
        transactionsHistory[idx]
      );
    });
  },

  _templateBodyTable (index, story) {
    return `
      <div class="col">
      <card-story name="${story.name}" img="${story.photoUrl}" description="${
      story.description
    }" date="${new Date(story.createdAt).toLocaleDateString('id-ID', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })}"></card-story>
      </div>
      `;
  },

  _templateEmptyBodyTable () {
    const recordHeadTable = document.querySelector('#recordsTable thead');

    return `
        <tr>
          <td colspan="${recordHeadTable.querySelectorAll('td,th').length}">
            <div class="text-center">Tidak ada catatan transaksi</div>
          </td>
        </tr>
      `;
  }
};

export default Dashboard;
