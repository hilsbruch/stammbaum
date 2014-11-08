@ECHO OFF

REM ***************************************************
REM * Delete Ahnenblatt's config file (Ahnblatt.ini)
REM ***************************************************

ECHO.
ECHO Delete %APPDATA%\Ahnenblatt\Ahnblatt.ini ...
ECHO.
ECHO Be sure that Ahnenblatt is not running.
ECHO Otherwise terminate Ahnenblatt and start this batch file again.
ECHO.

IF EXIST "%APPDATA%\Ahnenblatt\Ahnblatt.ini" GOTO DEL

ECHO.
ECHO Config file is not existing (anymore).
ECHO.

GOTO END

:DEL

DEL /F "%APPDATA%\Ahnenblatt\Ahnblatt.ini"

IF EXIST "%APPDATA%\Ahnenblatt\Ahnblatt.ini" GOTO PROBLEM

ECHO.
ECHO Successfully deleted config file.
ECHO.

GOTO END

:PROBLEM

ECHO.
ECHO Problem deleting config file.
ECHO.

:END

PAUSE
