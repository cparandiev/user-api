const applySpecifications = ({ spec, query }) => {
  query.find(spec.where);

  if (spec.order) {
    query.sort(spec.order);
  }
};

module.exports = ({ context, modelName, modelSchema }) => {
  const model = context.model(modelName, modelSchema);

  return {
    create: async data => {
      const dbResponse = await model.create(data);

      return dbResponse;
    },
    getById: async id => {
      const dbResponse = await model.findById(id);

      return dbResponse;
    },
    getAll: async (spec = {}) => {
      const query = model.find();

      applySpecifications({ spec, query });

      const dbResponse = await query.exec();

      return dbResponse;
    },
    updateById: async (id, data) => {
      const dbResponse = await model.findByIdAndUpdate(id, data, { new: true });

      return dbResponse;
    },
    deleteById: async id => {
      await model.findByIdAndDelete(id);
    }
  };
};
