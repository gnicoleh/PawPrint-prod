const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Pet = require('./Pets');

const AdoptionInfo = sequelize.define('AdoptionInfo', {
    petId: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false,
        references: {
            model: Pet,
            key: 'id'
        },
        onDelete: 'CASCADE',
        field: 'petid'
    },
    vetName: {
        type: DataTypes.STRING,
        field: 'vetname'
    },
    officeName: {
        type: DataTypes.STRING,
        field: 'officename'
    },
    firstVisitDate: {
        type: DataTypes.DATEONLY,
        field: 'firstvisitdate'
    },
    lastVisitDate: {
        type: DataTypes.DATEONLY,
        field: 'lastvisitdate'
    },
    phoneNumber: {
        type: DataTypes.STRING,
        field: 'phonenumber'
    }
}, {
    tableName: 'adoptioninfo',
    timestamps: false
});

const Vaccination = sequelize.define('Vaccination', {
    vaccination_id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        field: 'vaccination_id'
    },
    petId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
            model: Pet,
            key: 'id'
        },
        onDelete: 'CASCADE',
        field: 'petid'
    },
    vaccinationName: {
        type: DataTypes.STRING,
        field: 'vaccinationname'
    },
    vaccinationDate: {
        type: DataTypes.DATEONLY,
        field: 'vaccinationdate'
    },
    vetName: {
        type: DataTypes.STRING,
        field: 'vetname'
    },
    dueDate: {
        type: DataTypes.DATEONLY,
        field: 'duedate'
    }
}, {
    tableName: 'vaccination',
    timestamps: false
});

const Medication = sequelize.define('Medication', {
    medication_id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        field: 'medication_id'
    },
    petId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
            model: Pet,
            key: 'id'
        },
        onDelete: 'CASCADE',
        field: 'petid'
    },
    medicationName: {
        type: DataTypes.STRING,
        field: 'medicationname'
    },
    medicationDate: {
        type: DataTypes.DATEONLY,
        field: 'medicationdate'
    },
    vetName: {
        type: DataTypes.STRING,
        field: 'vetname'
    },
    dueDate: {
        type: DataTypes.DATEONLY,
        field: 'duedate'
    },
    dosage: {
        type: DataTypes.STRING,
        field: 'dosage'
    },
    frequency: {
        type: DataTypes.STRING,
        field: 'frequency'
    },
    notes: {
        type: DataTypes.STRING(1234),
        field: 'notes'
    }
}, {
    tableName: 'medication',
    timestamps: false
});

module.exports = { AdoptionInfo, Vaccination, Medication };