import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsOptional, IsObject } from 'class-validator';

export class CreatePdfDto {
  @ApiProperty({
    example: 'invoice',
    description: 'PDF template type',
  })
  @IsString()
  type: string;

  @ApiProperty({
    example: { name: 'John', amount: 100 },
  })
  @IsObject()
  data: Record<string, any>;
}
//webcheck_waiver
/*
{
  "type": "webcheck_waiver",
  "data": {
    "webcheckWaiverStep" : {
      "guardianName": "John",
      "caseNumber": 123,
      "applicantName": "Michael Jackson"
    }
  }
}
*/

//waiver_of_notice
/*
{
  "type": "waiver_of_notice",
  "data": {
    "caseDetailsStep": {
      "guardianName": "John",
      "caseNumber": 123,
      "applicantName": "Michael Jackson"
    },
    "waiversListStep": {
      "persons": [
        "Some person 1",
        "Some person 2",
        "Some person 3"
      ]
    }
  }
}
*/

//adult_guardianship
/*
{
  "type": "adult_guardianship",
  "data": {
    "caseDetailsStep": {
      "guardianName": "John",
      "caseNumber": 123,
      "contactName": "Someone",
      "contactPhone": "+12312312323"
    },
    "wardLocationStep": {
      "streetAddress": "Some st.",
      "city": "NY",
      "state": "NY",
      "zip": "123123",
      "wardPhone": "123321"
    },
    "safetyServiceStep": {
      "isProspectiveWardLeaveDuringDay": {
        "answer": null,
        "explanation": ""
      },
      "specialCircumstances": {
        "answer": true,
        "explanation": "Because something... bla bla blsa"
      },
      "isProspectiveWardHasCommunicationIssues": {
        "answer": false,
        "explanation": ""
      }
    }
  }
}
*/

//next_of_kin_of_prospective_ward
/*
{
  "type": "next_of_kin_of_prospective_ward",
  "data": {
    "caseDetailsStep": {
      "guardianName": "John",
      "caseNumber": 123321,
      "applicantName": "some app name"
    },
    "waiversListStep": {
      "relatives": [
        {
          "fullName": "Some name",
          "isRelativeUnder18": false,
          "relationship": "Child",
          "address": "Some address",
          "zip": 123321,
          "waiverSigned": true
        },
        {
          "fullName": "Some name 2",
          "isRelativeUnder18": false,
          "relationship": "Spouse",
          "address": "Some address 2",
          "zip": 123321,
          "waiverSigned": false
        }
      ]
    }
  }
}
*/

//applicant_credibility_application
/*
{
  "type": "applicant_credibility_application",
  "data": {
    "caseDetailsStep": {
      "guardianName": "John",
      "caseNumber": 12312,
      "nameOfProspectiveWard": "Someone"
    },
    "applicantInformStep": {
      "applicantName": "Some name",
      "dob": "12.09.1993",
      "applicantAddress": {
        "streetAddress": "Some street",
        "city": "NY",
        "state": "NY",
        "zip": 123123,
        "from": "231232",
        "isSameAddressLast5Years": null,
        "previousAddresses": [
          {
            "address": "Some prev address",
            "from": "32323",
            "to": "123 32 3"
          }
        ]
      }
    },
    "familyAndEmploymentStep": {
      "isMarried": null,
      "marriage": {
        "spouseName": "Spouse name",
        "yearMarried": 2015,
        "spouseStreetAddress": "Some street name",
        "city": "LA",
        "state": "LA",
        "zip": 123322
      },
      "employment": {
        "currentEmployer": "TEST",
        "from": null,
        "isSameEmployerLast5Years": null,
        "previousEmployers": [
          {
            "employer": "Some",
            "from": null,
            "to": null
          }
        ]
      }
    },
    "bankingInformStep": {
      "bankName": "Universal bank",
      "accountType": ["savings"]
    },
    "legalAndFinancialHistoryStep": {
      "isApplicantEverFiledBankruptcy": true,
      "isApplicantEverBeenGarnished": null,
      "isApplicantEverBeenInReceivership": true,
      "isApplicantEverBeenConvictedFelony": null,
      "isApplicantHadExperienceHandlingInvestments": null,
      "explanation": "ASD AS DSAD SAD ASD "
    }
  }
}
*/

//adult_jurisdiction_affidavit
/*
{
  "type": "adult_jurisdiction_affidavit",
  "data": {
    "caseDetailsStep": {
      "guardianName": "John",
      "caseNumber": 123123,
      "applicantName": "Some name"
    },
    "addressInformStep": {
      "currentAddress": "Some address",
      "from": null,
      "to": null,
      "withWhom": "no answer...",
      "isSameAddressLast2Years": null,
      "previousAddresses": [
        {
          "address": "Some address",
          "from": null,
          "to": null
        }
      ]
    },
    "legalQuestionsStep": {
      "isAffiantHaveInfoAboutAnyGuardianship": null,
      "infoAboutCourtProceeding": "no info...",
      "isAllegedIncompetentDivorced": null,
      "isDivorcePending": null,
      "courtName": "Court name",
      "isAllegedIncompetentCurrently": null,
      "additionalInfo": "Some info"
      "isAllegedIncompetentCurrently": true
    }
  }
}
*/

//prospective_wards_financial_information
/*
{
   "type":"prospective_wards_financial_information",
   "data":{
      "caseDetailsStep":{
         "inTheMatterOfTheGuardianshipOf":"some name",
         "caseNumber":"123123"
      },
      "benefitsStep":{
         "benefit":[
            "socialSecurity",
            "other",
            "PERS",
            "VABenefits",
            "railroadRetirement",
            "medicaid",
            "otherInsuranceBenefits",
            "otherPension"
         ],
         "socialSecurity":{
            "representativePayeeName":"asds asd",
            "socialSecuritySize":2
         },
         "PERS":{
            "size":3
         },
         "VABenefits":{
            "size":4
         },
         "railroadRetirement":{
            "size":5
         },
         "medicaid":{
            "isWardMedicaidFacilityResident":true
         },
         "otherInsuranceBenefits":{
            "description":"insurance benefits description"
         },
         "otherPension":{
            "describeOtherPensionSize":6,
            "sourceOfOtherPension":"other pension description"
         },
         "other":{
            "description":"other benefits description"
         }
      },
      "financialAccountStep":{
         "accounts":[
            {
               "institution":"asdsad sa",
               "type":"retirement",
               "estimatedBalance":232
            },
            {
               "institution":"sa dasd sad",
               "type":"brokerage_investment",
               "estimatedBalance":2323
            }
         ]
      },
      "propertyStep":{
         "isProspectiveWardRealEstateOwner":true,
         "prospectiveWardReceivesRentalIncome":false,
         "realEstateAddress":"asd sad ",
         "rentalIncomeAmount":0
      },
      "assetsInterests":{
         "prospectiveWardBeneficiaryOf":[
            "decedentEstate",
            "otherTrust"
         ],
         "identifyingInformation":"sddasd as d",
         "sourceOfIncomeOrAsset":"asdasd",
         "amountOfIncomeOrAsset":"123213",
         "hasSufficientFundsToPayCourtCosts":false,
         "doesNotHaveSufficientFundsToPayCourtCosts":true
      }
   },
   "meta":"extra metadata"
}
*/

//application_for_appointment_of_guardian_of_alleged_incompetent
/*
{
  "type": "application_for_appointment_of_guardian_of_alleged_incompetent",
  "data": {
    "caseDetailsStep": {
      "guardianName": "John",
      "caseNumber": "123123",
      "relationshipToWard": "initialAppointment"
    },
    "wardInformStep": {
      "wardName": "Name",
      "wardDob": "12-09-1993",
      "wardAddress": "some address",
      "explanationNeedsOfGuardian": "just with no reason",
      "isWardNeedsInterpreterForEnglish": false,
      "wardSpeakLanguage": "de",
      "wardPrescriptions": "something",
      "isWardHasMilitaryService": true,
      "militaryService": {
        "militaryId": "123",
        "branchService": "AD",
        "startDateOfService": "01-01-2023",
        "endDateOfService": "01-01-2024"
      }
    },
    "assetsAndIncomeStep": {
      "estimatedValuePersonalProperty": 0,
      "estimatedValueRealEstate": 0,
      "annualRentsReceived": 0,
      "otherAnnualIncome": 0,
      "bondAmount": 0,
      "publicPrivateAssistance": "no",
      "isWardHasRepresentativePayee": true,
      "payeeName": "some name",
      "payeeAddress": "some address"
    },
    "guardianshipTypeStep": {
      "guardianResponsibility": "theProspectiveWardsPerson",
      "typeGuardianship": ["personAndEstate","estateOnly"],
      "limitedPowersRequested": "no",
      "timePeriodRequested": "12",
      "specifyTimePeriod": {
        "start": "some-dates",
        "end": "some-dates"
      }
    },
    "applicantInformStep": {
      "applicantName": "Michael",
      "applicantDob": "some-date",
      "applicantPhone": "+1123123213",
      "applicantEmail": "mail@mail.com",
      "applicantAddress": "some address",
      "applicantRelationshipToWard": "son",
      "isApplicantRequiringInterpreter": false,
      "applicantSpeakLanguage": "uk"
    },
    "legalDeclarationsStep": {
      "isApplicantHasBeenChargedWithViolence": false,
      "conviction": {
        "convictionName": "some",
        "convictionDate": "some-date",
        "convictionPlace": "no"
      },
      "isGuardianHasBeenNominatedInWriting": true,
      "nominatedPersonName": "Pedro",
      "isNominatedPersonContactInfoListedOnForm15": true,
      "isGuardianNominatedDocumentAttached": false,
      "isNotAdmin": true,
      "isApplicantAgreed": false
    }
  }
}



{
  "type": "application_for_appointment_of_guardian_of_alleged_incompetent",
  "data": {
    "caseDetailsStep": {
      "guardianName": "Artem Tkachyk",
      "caseNumber": "1232323",
      "relationshipToWard": "Successor appointment"
    },
    "wardInformStep": {
      "wardName": "asd asd sa",
      "wardDob": "2026-03-11T22:00:00.000Z",
      "wardAddress": "some address",
      "explanationNeedsOfGuardian": "because",
      "isWardNeedsInterpreterForEnglish": true,
      "wardSpeakLanguage": "ak",
      "wardPrescriptions": "asd as asdas d",
      "isWardHasMilitaryService": true,
      "militaryService": {
        "militaryId": "asd asd",
        "branchService": "frfrf",
        "startDateOfService": "2026-02-28T22:00:00.000Z",
        "endDateOfService": "2026-03-30T21:00:00.000Z"
      }
    },
    "assetsAndIncomeStep": {
      "estimatedValuePersonalProperty": 46,
      "estimatedValueRealEstate": 340,
      "annualRentsReceived": 34,
      "otherAnnualIncome": 43,
      "bondAmount": 545,
      "publicPrivateAssistance": "qw sdasd sad s",
      "isWardHasRepresentativePayee": true,
      "payeeName": "sd a dasd",
      "payeeAddress": "asd sa asd as"
    },
    "guardianshipTypeStep": {
      "guardianResponsibility": "Personal and medical needs",
      "typeGuardianship": [
        "Person only",
        "Emergency"
      ],
      "limitedPowersRequested": "test",
      "timePeriodRequested": "Limited to a specific time period",
      "specifyTimePeriod": {
        "start": "2026-03-26T22:00:00.000Z",
        "end": "2026-03-30T21:00:00.000Z"
      }
    },
    "applicantInformStep": {
      "applicantName": "asd sad asd asd asd sa d",
      "applicantDob": "2026-02-01T22:00:00.000Z",
      "applicantPhone": "+380689983456",
      "applicantEmail": "asdasd@asd.asd",
      "applicantAddress": "asd asdsd",
      "applicantRelationshipToWard": "asd asd",
      "isApplicantRequiringInterpreter": true,
      "applicantSpeakLanguage": "ab"
    },
    "legalDeclarationsStep": {
      "isApplicantHasBeenChargedWithViolence": true,
      "conviction": {
        "convictionName": "sda asd",
        "convictionDate": "2026-03-04T22:00:00.000Z",
        "convictionPlace": "asdasdsa asd as"
      },
      "isGuardianHasBeenNominatedInWriting": true,
      "nominatedPersonName": "asd asd asd",
      "isNominatedPersonContactInfoListedOnForm15": true,
      "isGuardianNominatedDocumentAttached": null,
      "isNotAdmin": null,
      "isApplicantAgreed": true
    }
  },
  "meta": "extra metadata"
}
*/



