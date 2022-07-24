import { ApiProperty } from "@nestjs/swagger";

export class CreateFactcheckDto {
  @ApiProperty({
    example: "TestUserId",
    description: "팩트체크를 작성하는 유저의 id입니다.",
    required: true,
  })
  target_user_id: string;

  @ApiProperty({
    example: "TestDebateId",
    description: "팩트체크를 작성하는 토론의 id입니다.",
    required: true,
  })
  target_debate_id: number;

  @ApiProperty({
    example: "true",
    description: "팩트체크의 찬반측의 정보를 담고 있습니다.",
    required: true,
  })
  pros: boolean;

  @ApiProperty({
    example: "testContents~~~",
    description: "팩트체크의 설명, 내용 부분입니다.",
    required: true,
  })
  description: string;

  @ApiProperty({
    example: "testUrl",
    description: "팩트체크의 설명, 내용을 뒷받침하는 자료의 링크입니다.",
    required: true,
  })
  reference_url: string;
}
