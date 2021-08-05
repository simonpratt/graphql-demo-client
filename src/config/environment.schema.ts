import Joi from 'joi';

const schema = Joi.object()
  .keys({
    REACT_APP_GRAPH_URL: Joi.string().required(),
  })
  .required();

export default schema;
