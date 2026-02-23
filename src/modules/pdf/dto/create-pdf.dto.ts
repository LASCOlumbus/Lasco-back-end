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
        "answer": "yes",
        "explanation": "Because something... bla bla blsa"
      },
      "isProspectiveWardHasCommunicationIssues": {
        "answer": "no",
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
          "zip": 123321
        },
        {
          "fullName": "Some name 2",
          "isRelativeUnder18": false,
          "relationship": "Spouse",
          "address": "Some address 2",
          "zip": 123321
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
      "caseNumber": 12312
    },
    "applicantInformStep": {
      "applicantName": "Some name",
      "dob": "12.09.1993",
      "applicantAddress": {
        "streetAddress": "Some street",
        "city": "NY",
        "state": "NY",
        "zip": 123123,
        "from": null,
        "isSameAddressLast5Years": null,
        "previousAddresses": [
          {
            "address": "Some prev address",
            "from": null,
            "to": null
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
      "explanation": ""
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
    }
  }
}
*/

//prospective_wards_financial_information
/*
{
  "type": "prospective_wards_financial_information",
  "data": {
    "caseDetailsStep": {
      "inTheMatterOfTheGuardianshipOf": "Something",
      "caseNumber": 123123
    },
    "benefitsStep": {
      "benefit": ["social_security","pers","other"],
      "socialSecurity": { 
        "representativePayeeName": "Test name", 
        "socialSecuritySize": "123" 
      },
      "PERS": {
        "size": 123
      },
      "VABenefits": {
        "size": "12332"
      },
      "railroadRetirement": {
        "size": 1233
      },
      "medicaid": {
        "isWardMedicaidFacilityResident": false
      },
      "otherInsuranceBenefits": {
        "description": "test description"
      },
      "otherPension": {
        "description": "test desc..."
      }
    },
    "financialAccountStep": {
      "accounts": [{ 
        "institution": "test", 
        "type": "A", 
        "estimatedBalance": "123123" 
      }]
    },
    "propertyStep": {
      "isProspectiveWardRealEstateOwner": null,
      "prospectiveWardReceivesRentalIncome": null,
      "realEstateAddress": "address...",
      "rentalIncomeAmount": "123"
    },
    "assetsInterests": {
      "prospectiveWardBeneficiaryOf": [],
      "identifyingInformation": "123123221",
      "sourceOfIncomeOrAsset": "work",
      "amountOfIncomeOrAsset": "123123",
      "hasSufficientFundsToPayCourtCosts": false,
      "doesNotHaveSufficientFundsToPayCourtCosts": false
    }
  }
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
*/



