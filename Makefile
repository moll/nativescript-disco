NAME = $(notdir $(CURDIR))
OUTPUT = platforms/ios/$(NAME)
FILES =
FILES += $(addprefix $(OUTPUT)/, $(wildcard app/*.*))
FILES += $(addprefix $(OUTPUT)/, $(wildcard *.storyboard))

love:
	@echo "Feel like makin' love."

compile: app/tns_modules platforms/ios $(FILES)

run: compile
	tns run ios --emulator

platforms/ios:
	tns platform add ios --symlink
	tns prepare ios

app/tns_modules:
	tns create tns_modules
	mv tns_modules/app/tns_modules app/tns_modules
	rm -r tns_modules

$(OUTPUT)/%: %
	cp "$<" "$@"

clean:
	rm -rf app/tns_modules
	rm -rf platforms

.PHONY: love
.PHONY: compile
.PHONY: run
.PHONY: clean
