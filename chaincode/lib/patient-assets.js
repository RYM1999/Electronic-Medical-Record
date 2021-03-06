/**
 * @author Sushant Barje
 * @create Sat Jan 15 19:36:02 IST 2022
 * @description Schema class of patient
 */

'use strict';

const crypto = require('crypto');

class PatientAsset {

    constructor(patientId = '', firstName = '', middleName = '', lastName = '', password = '', age = '', phoneNumber = '', address = '', bloodGroup = '', updatedBy = '', symptoms = '', diagnosis = '', treatment = '', other = '', followUp = '') {
        this.patientId = patientId;
        this.firstName = firstName;
        this.middleName = middleName;
        this.lastName = lastName;
        this.password = crypto.createHash('sha256').update(password).digest('hex');
        this.age = age;
        this.phoneNumber = phoneNumber;
        this.address = address;
        this.bloodGroup = bloodGroup;
        this.updatedBy = updatedBy;
        this.symptoms = symptoms;
        this.diagnosis = diagnosis;
        this.treatment = treatment;
        this.other = other;
        this.permissionGranted = [];
        this.followUp = followUp;
        return this;
    }
}

module.exports = PatientAsset;