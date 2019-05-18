module.exports = (sequelize, DataTypes) => {
	const Income = sequelize.define('Income', {

		ieID: {
			type: DataTypes.INTEGER,
			allowNULL: false

		},
		incomeAmount: {
			type: DataTypes.FLOAT,
			allowNULL: false

		},
		IEdate: {
			type: DataTypes.DATE
		},

		category: {
			type: DataTypes.ENUM,
			values: [""],

		},
		IEType: {
			type: DataTypes.ENUM,
			values: ["Bills", "Utilities", "Savings", "CC Payment"],

			descript: {
				type: DataTypes.VATCHAR,
				allowNULL: false

			},
			source: {
				type: DataTypes.VATCHAR,
				allowNULL: false

			},

		}

	
	})

	
};
