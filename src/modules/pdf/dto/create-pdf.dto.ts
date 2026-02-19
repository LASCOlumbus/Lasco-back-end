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



