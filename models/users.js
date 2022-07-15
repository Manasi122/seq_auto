const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('users', {
    user_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    parent_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    client_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    token: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    user_type: {
      type: DataTypes.ENUM('partner_owner','parent_client','client'),
      allowNull: false
    },
    username: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    password: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    full_name: {
      type: DataTypes.STRING(25),
      allowNull: false
    },
    contact_number: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    email: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    valid_email: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 1
    },
    operation_email: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    operation_mobile: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    account_email: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    account_phone_no: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    bank_name: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    account_number: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    vatin_number: {
      type: DataTypes.STRING(50),
      allowNull: false,
      primaryKey: true
    },
    gst_number: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    is_valid_gst: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    service_tax_number: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    pan_number: {
      type: DataTypes.STRING(25),
      allowNull: false
    },
    identity_proof_file: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    fuel_charge: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    cod_amount: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    cod_percent: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    duty_amount: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      primaryKey: true
    },
    duty_percent: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    account_type: {
      type: DataTypes.ENUM('Current','Saving'),
      allowNull: false
    },
    ifsc_code: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    company_name: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    contact_person: {
      type: DataTypes.STRING(25),
      allowNull: false
    },
    address: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    address2: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    landmark: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    country_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    state_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    city_id: {
      type: DataTypes.STRING(50),
      allowNull: false,
      primaryKey: true
    },
    pincode: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    status: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    approved_date: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    approved_status: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    ip_address: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    reg_country: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    reg_city: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    agreement_file: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    dotzot_agent_id: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    gati_agent_id: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    gojavas_agent_id: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    parent_current_status: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    gst_no2: {
      type: DataTypes.STRING(25),
      allowNull: false
    },
    parent_credit_limit: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    parent_credit_limit_current_amount: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    parent_credit_limit_status: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    credit_limit: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    credit_limit_current_amount: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    credit_limit_status: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    coupon_code: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    coupon_code_date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    coupon_code_status: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    referral_code: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    referral_coupon_code: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    referral_coupon_code_date: {
      type: DataTypes.STRING(25),
      allowNull: false
    },
    reward_amount: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    reward_amount_status: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    change_limit_permission: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    individuals_bill_status: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    parent_client_url: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    createregistrationurl_status: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    parent_client_url_tag: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    address_proof: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    incorporate_certificate: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    license: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    cheque: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    select_user_Type: {
      type: DataTypes.STRING(25),
      allowNull: false
    },
    first_name: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    last_name: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    bank_branch_name: {
      type: DataTypes.STRING(25),
      allowNull: false
    },
    account_holder_name: {
      type: DataTypes.STRING(25),
      allowNull: false
    },
    service_tax_number_file: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    vat_in_number_file: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    website: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    sign_up_date: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    pan_number_file: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    address_proof_file: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    incorporate_certificate_file: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    license_file: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    cheque_file: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    user_image: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    fb_id: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    gp_id: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    registration_status: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    balance_amount: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: 0
    },
    sales_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    agreement_status: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0,
      comment: "0- Not accepted, 1- Accepted"
    },
    agreement_date: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    client_plan_payment: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 1,
      comment: "1-Yes, 0-No"
    },
    edit_company_name_status: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    domestic: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    international: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    email_otp: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    sms_otp: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    email_verification: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 1
    },
    sms_verification: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 1
    },
    registration_source: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    gst_status: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    autoselection_status: {
      type: DataTypes.ENUM('yes','no'),
      allowNull: false
    },
    auto_partner_selection_status: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    parent_client_change_credit_limit: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    AccountType: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1
    },
    postpaid_limit: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    consignment_wallet: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    last_status: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    last_login: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    forget_pas_otp: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    kyc_verification: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0,
      comment: "0:not verify; 1: verify"
    },
    reg_email_verify: {
      type: DataTypes.ENUM('0','1'),
      allowNull: false
    },
    reg_phone_verify: {
      type: DataTypes.ENUM('0','1'),
      allowNull: false
    },
    acc_email_verify: {
      type: DataTypes.ENUM('0','1'),
      allowNull: false
    },
    acc_phone_verify: {
      type: DataTypes.ENUM('0','1'),
      allowNull: false
    },
    ops_email_verify: {
      type: DataTypes.ENUM('0','1'),
      allowNull: false
    },
    ops_phone_verify: {
      type: DataTypes.ENUM('0','1'),
      allowNull: false
    },
    gst_file: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    reg_mail: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    reg_phone: {
      type: DataTypes.STRING(40),
      allowNull: false
    },
    reg_mail_switch: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    reg_phone_switch: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    acc_mail_switch: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    acc_phone_switch: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    ops_mail_switch: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    ops_phone_switch: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    ship_label_image: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    picked_up_sms_template: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    dispatch_sms_template: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    online_outcod_sms_template: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    delivered_sms_template: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    brand_name: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    marketing_profile_logo: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    buyitmail: {
      type: DataTypes.ENUM('0','1'),
      allowNull: false,
      defaultValue: "1"
    },
    feedbackmail: {
      type: DataTypes.ENUM('0','1'),
      allowNull: false,
      defaultValue: "1"
    },
    agreement_insurance_value: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    assign_order_confirmation: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    lead_id: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    support_user: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    auth_token: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    applogin: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    wallet_credit_limit: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 5000
    },
    wallet_credit_limit_used: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    email_opration: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 1
    },
    insurance_amount: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 5000
    },
    interakt_status: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    interakt_batch: {
      type: DataTypes.STRING(25),
      allowNull: false
    },
    bill_type: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1
    },
    sign_up_campaign: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    parent_credit_limit_assign: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 5000
    },
    parent_credit_limit_used: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    yaari_points: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    parent_set_recharge_amout: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    zone_wise_km: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    shipment_approve: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    digital_signature: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    is_postpaid: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    instamojo_account_id: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    need_intro: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 1
    },
    reverse_billing: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    pickup_address_billing: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    default_return_address: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    angular_redirect_token: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    angular_redirect_time: {
      type: DataTypes.DATE,
      allowNull: false
    },
    cashback_redirect_id: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    cashback_given: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    campaign_cashback_given: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    instamojo_redirect_token: {
      type: DataTypes.STRING(55),
      allowNull: false,
      defaultValue: "0"
    },
    token_return: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 1
    },
    sms_login: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    balance_sms_login: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    uni_camp_referral_code: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    uni_camp_referral_parameter: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    gst_verify: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 0,
      comment: "0:not verify; 1:verify; 2:request"
    },
    gst_script: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    gst_p_name: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    gst_g_s: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    gst_address: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    otheraddress: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    aadhar_details: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    accept_agree: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 0,
      comment: "0:not accept agree;1:accepted"
    },
    gst_agreement_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    change_password_time: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    adhar_verify: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 0,
      comment: "0:not verify;1:verify; 2:request"
    },
    bank_verification: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 0,
      comment: "0:not verified;1;verified"
    },
    froud_suspected: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: 0
    },
    froud_marked: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: 0
    },
    call_verify: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: 0,
      comment: "0:not_verified; 1:verified"
    },
    gst_verify2: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 0
    },
    agreement_adr: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    gst2_script: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    other_file: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    campaign: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    universal_campaign: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    gst2_file: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    other_file_name: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    surepass_approval_type: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    do_not_show: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    pan_verify: {
      type: DataTypes.TINYINT,
      allowNull: true,
      comment: "0:not approved; 1:approved; 2: requested"
    },
    new_camp_value: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    camp_recived_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    camp_recived: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    close_old_version: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    split_pickname: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    collect_amt: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: 0
    },
    is_international: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'users',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "user_id" },
          { name: "vatin_number" },
          { name: "duty_amount" },
          { name: "city_id" },
          { name: "individuals_bill_status" },
        ]
      },
      {
        name: "user_id",
        using: "BTREE",
        fields: [
          { name: "user_id" },
        ]
      },
      {
        name: "token",
        using: "BTREE",
        fields: [
          { name: "token" },
        ]
      },
    ]
  });
};
