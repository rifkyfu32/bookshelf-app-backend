const {
  addBookHandler,
  getListBookHandler,
  getBookByIdHandler,
  editBookByIdHandler,
  deleteBookByIdHandler,
  payloadErrorHandle,
} = require('./handler');
const {
  RequestAddSchema,
  RequestEditSchema,
  ParamIdSchema,
  QuerySchema,
} = require('./schema');

const routes = [
  {
    method: 'POST',
    path: '/books',
    handler: addBookHandler,
    options: {
      validate: {
        payload: RequestAddSchema,
        failAction: payloadErrorHandle,
      },
    },
  },
  {
    method: 'GET',
    path: '/books',
    handler: getListBookHandler,
    options: {
      validate: {
        query: QuerySchema,
      },
    },
  },
  {
    method: 'GET',
    path: '/books/{id}',
    handler: getBookByIdHandler,
    options: {
      validate: {
        params: ParamIdSchema,
      },
    },
  },
  {
    method: 'PUT',
    path: '/books/{id}',
    handler: editBookByIdHandler,
    options: {
      validate: {
        params: ParamIdSchema,
        payload: RequestEditSchema,
        failAction: payloadErrorHandle,
      },
    },
  },
  {
    method: 'DELETE',
    path: '/books/{id}',
    handler: deleteBookByIdHandler,
    options: {
      validate: {
        params: ParamIdSchema,
      },
    },
  },
];

module.exports = routes;
