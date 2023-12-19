import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Textarea,
} from "@chakra-ui/react";
import SqlEditor from "@/components/query/SqlEditor";
import { QueryDiffDataGrid } from "@/components/query/QueryDiffDataGrid";
import { QueryDiffResult } from "@/lib/api/adhocQuery";
import { Check } from "@/lib/api/checks";

interface QueryDiffViewProp {
  check: Check;
}

export function QueryDiffView({ check }: QueryDiffViewProp) {

  return <>
    <Accordion defaultIndex={[]} allowToggle>
      <AccordionItem>
        <AccordionButton>
          <Box as="span" textAlign="left">
            description
          </Box>
          <AccordionIcon />
        </AccordionButton>

        <AccordionPanel pb={4}>
          <Textarea width="100%" height="400px"></Textarea>
        </AccordionPanel>
      </AccordionItem>

      <AccordionItem>
        <AccordionButton>
          query
          <AccordionIcon />
        </AccordionButton>

        <AccordionPanel>
          <Box height="400px" width="100%" border="lightgray 1px solid ">
            <SqlEditor value={(check?.params as any).sql_template} />
          </Box>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>

    <Box flex="1" style={{ contain: "size" }}>
      <QueryDiffDataGrid
        isFetching={false}
        result={check?.last_run?.result as QueryDiffResult}
        primaryKeys={(check?.params as QueryDiffResult).primary_keys || []}
      />
    </Box>
  </>;

}
